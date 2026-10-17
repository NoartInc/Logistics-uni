import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HelperModalEditForm from "../../partials/helper-content/HelperModalEditForm";
import HelperTableContent, {
  StatusPill,
} from "../../partials/helper-content/HelperTableContent";
import { retrieveHelpers, deleteHelper } from "../../store/actions/helper-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function MasterHelper() {
  const dispatch = useDispatch();
  const helpers = useSelector((state) => state.helpers.list);

  const removeHelper = (id) => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(deleteHelper(id));
    }
  };

  useEffect(() => {
    dispatch(retrieveHelpers());
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Fullname",
        accessor: "fullName",
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: (data) => (
          <span>{(data?.row?.original?.location)?.length ? data?.row?.original?.location : "-"}</span>
        ),
      },
      {
        Header: "Contact",
        accessor: "contact",
        Cell: (data) => (
          <span>{(data?.row?.original?.contact)?.length ? data?.row?.original?.contact : "-"}</span>
        ),
      },
      {
        Header: "Action",
        Cell: (helpers) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["update_helper"]?.allowedRoles.includes(
              userData?.user?.role
            ) && <HelperModalEditForm id={helpers.row.original.id} />}
            {ROLES_MANAGEMENTS["delete_helper"]?.allowedRoles.includes(
              userData?.user?.role
            ) && (
              <svg
                onClick={() => removeHelper(helpers.row.original.id)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            )}
          </div>
        ),
      },
    ],
    []
  );

  return <HelperTableContent columns={columns} data={helpers || []} />;
}

export default MasterHelper;
